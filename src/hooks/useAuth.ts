import { useSelector, useDispatch } from "react-redux";
import { RootState, logoutUser, AppDispatch } from "../redux/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, token, isAuthenticated, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const logout = () => {
    dispatch(logoutUser());
  };

  return {
    user,
    token,
    isAuthenticated,
    loading,
    error,
    logout,
  };
};
