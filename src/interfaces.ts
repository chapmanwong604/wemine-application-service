interface Config {
  PORT:             number;
  TARGET_URL:       string;
  NAME:             string;
  EMAIL:            string;
  POSITION:         string;
  CV_URL:           string;
  COVER_LETTER_URL: string;
  INTRO:            string;
  WEBSITE:          string;
  NOTE:             string;
  CODE_URL:         string;
}

interface Content {
  name:             string,
  email:            string,
  position:         string,
  cv_url:           string,
  cover_letter_url: string,
  intro:            string,
  website:          string,
  note:             string,
  code_url:         string,
}

export { type Config, type Content };