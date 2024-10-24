import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import type { AuthResponse } from '../model';
import { UserService } from '.';


enum USER_THUNKS_ACTIONS {
    REFRESH_ACCESS_TOKEN = 'user/refreshAccessToken',
    SIGN_IN = 'user/signIn',
    SIGN_UP = 'user/signUp',
    LOGOUT = 'user/logout',
  }


  type RejectValue = {
    message: string;
  };


  export const refreshAccessToken = createAsyncThunk<
  AuthResponse,
  void,
  { rejectValue: RejectValue }
>(USER_THUNKS_ACTIONS.REFRESH_ACCESS_TOKEN, async (_, { rejectWithValue }) => {
  try {
    return await UserService.refreshAccessToken();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({ message: err.message });
  }
});


// ============= SIGN IN THUNK =============

export const signIn = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: RejectValue }
>(
  USER_THUNKS_ACTIONS.SIGN_IN,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      return await UserService.signIn(email, password);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({ message: err.message });
    }
  }
);

// ============= SIGN UP THUNK ============

export const signUp = createAsyncThunk<
  AuthResponse,
  { nickname: string; firstName: string; secondName: string; email: string; password: string; avatarUrl: string },
  { rejectValue: RejectValue }
>(
  USER_THUNKS_ACTIONS.SIGN_UP,
  async ({ nickname, firstName, secondName, email, password, avatarUrl  }, { rejectWithValue }) => {
    try {
      return await UserService.signUp(nickname, firstName, secondName, email, password, avatarUrl);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({ message: err.message });
    }
  }
);
// ============= LOGOUT THUNK ============

export const logout = createAsyncThunk<
  void,
  void,
  { rejectValue: RejectValue }
>(USER_THUNKS_ACTIONS.LOGOUT, async (_, { rejectWithValue }) => {
  try {
    return await UserService.logout();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({ message: err.message });
  }
});