import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import API from "../services/api";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  is_active: boolean;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const isServer = typeof window === "undefined";

const initialState: AuthState = {
  user: null,
  token: !isServer ? localStorage.getItem("token") : null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// ── REGISTER USER (Async Thunk) ─────────────────────────────────
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await API.post("/auth/register", data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.detail || "Registration failed");
    }
  }
);

// ── LOGIN USER (Async Thunk) ────────────────────────────────────
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: any, { rejectWithValue }) => {
    try {
      // Backend expects {email, password} as JSON
      const res = await API.post("/auth/login", data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.detail || "Invalid credentials");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      if (!isServer) {
        localStorage.removeItem("token");
      }
    },
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action: any) => {
        state.loading = false;
        // Handle Pydantic validation errors (arrays) or string errors
        const payload = action.payload;
        if (Array.isArray(payload)) {
          state.error = payload[0]?.msg || "Invalid registration data";
        } else if (payload && typeof payload === "object" && payload.detail) {
          const detail = payload.detail;
          state.error = Array.isArray(detail) ? detail[0]?.msg : (typeof detail === "string" ? detail : "Registration failed");
        } else {
          state.error = (payload as string) || "Registration failed";
        }
      })
      // Login cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: any) => {
        state.loading = false;
        state.token = action.payload.access_token;
        state.isAuthenticated = true;
        
        if (!isServer) {
          localStorage.setItem("token", action.payload.access_token);
        }
      })
      .addCase(loginUser.rejected, (state, action: any) => {
        state.loading = false;
        const payload = action.payload;
        if (Array.isArray(payload)) {
          state.error = payload[0]?.msg || "Invalid credentials";
        } else if (payload && typeof payload === "object" && payload.detail) {
          const detail = payload.detail;
          state.error = Array.isArray(detail) ? detail[0]?.msg : (typeof detail === "string" ? detail : "Login failed");
        } else {
          state.error = (payload as string) || "Login failed";
        }
      });
  },
});

export const { logoutUser, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
