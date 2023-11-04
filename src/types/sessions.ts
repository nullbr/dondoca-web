export interface Credentials {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  passwordConfirmation?: string;
  currentPassword?: string;
  defaultLocationId?: number;
  accessToken: string;
  refreshToken?: string;
  expires?: number;
}

export interface UserDetails {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin";
  createdAt: string;
  avatarUrl: string | null;
}

export interface EditUserPayload {
  registration: {
    email?: string;
    password?: string;
    password_confirmation?: string;
    current_password?: string;
    first_name?: string;
    last_name?: string;
    avatar_url?: string | null;
    default_location_id?: number;
  };
}

export interface UserResponse {
  user: UserDetails;
}

export interface SessionResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  role: "user" | "admin";
  created_at: number;
}
