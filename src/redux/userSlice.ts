import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  users: any[];
  filteredUsers: any[];
  totalPages: number;
  status: "idle" | "loading" | "failed";
  searchTerm: string;
}

const initialState: UserState = {
  users: [],
  filteredUsers: [],
  totalPages: 1,
  status: "idle",
  searchTerm: "",
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (page: number) => {
    const response = await axios.get(
      `https://dummyjson.com/users?limit=10&skip=${(page - 1) * 10}`
    );
    return response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      state.filteredUsers = state.users.filter(
        (user) =>
          user.firstName
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase()) ||
          user.lastName.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "idle";
        state.users = action.payload.users;
        state.filteredUsers = state.users;
        state.totalPages = Math.ceil(action.payload.total / 10);
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setSearchTerm } = userSlice.actions;
export default userSlice.reducer;
