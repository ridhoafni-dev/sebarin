export interface Category {
  id: number;
  slug: string;
  name: string;
}

export interface Theme {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  image: string;
  version: number;
  is_premium: number;
  is_active: number;
  featured_image: string;
  image_url: string;
  background_url: string;
  background_type: string;
}

export interface ThemeResponse {
  success: boolean;
  message: string;
  data: {
    data: Theme[];
    path: string;
    per_page: number;
    next_page_url: string | null;
    prev_page_url: string | null;
  };
}

export enum DialogType {
  FilterTheme = "FILTER_THEME",
  FilterVideo = "FILTER_VIDEO",
}

export interface DialogParams {
  type: DialogType;
  title: string;
  customField1?: string;
  customField2?: string;
  callback1?: (value1: string) => void;
  callback2?: () => void;
}

export interface FilterOptions {
  style?: string;
  color?: string;
  categoryId?: number;
}
