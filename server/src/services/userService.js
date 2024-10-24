const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

class UserService {
  async signUp(nickname, firstName, secondName, email, password, avatarUrl) {
    const [user, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: { nickname, firstName, secondName, email, password: await bcrypt.hash(password, 10), avatarUrl },
    });
   
    if (!isCreated) {
      throw new Error('User already exists');
    }

    const plainUser = user.get();
    delete plainUser.password;

    return { user: plainUser };
  }

  async signIn(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('User not found');

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) throw new Error('Incorrect email or password');

    const plainUser = user.get();
    delete plainUser.password;

    return { user: plainUser };
  }
}

module.exports = new UserService();