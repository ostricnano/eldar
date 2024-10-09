
export interface UserProfileProps {
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface CreateComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface CreatePost {
  title: string;
  body: string;
  userId: number;
}

export interface PostsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CustomInputProps {
  type?: string;
  label: string;
  name?: string;
  value: string;
  helperText?: string;
  error: boolean;
  rows?: number;
  multiline?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioInputProps {
  label: string;
  name: string;
  value?: string;
  options?: string[];
  error?: boolean;
  helperText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface HeaderProps {
  title: string;
  createLabel?: string;
  setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenEditModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface BaseModalProps {
  children?: React.ReactNode;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  onClose?: () => void;
}

export interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  label: string;
}
