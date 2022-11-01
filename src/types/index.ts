export type FieldOfStudy =
  | 'mathematics'
  | 'informatics'
  | 'physics'
  | 'biology '
  | 'history'
  | 'chemistry';

export type Student = {
  firstName: string;
  surname: string;
  gender: 'male' | 'female' | 'other';
  birthday: Date;
  fieldOfStudy: FieldOfStudy;
};
