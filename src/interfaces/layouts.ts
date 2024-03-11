export type alignType = 'start' | 'center' | 'end' | undefined;
export type justifyType = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface flexProps {
  children?: React.ReactNode;
  gap?: string | number | (string & {});
  vertical?: boolean;
  wrap?: boolean;
  className?: string;
  align?: alignType;
  justify?: justifyType;
  style?: any;
}
