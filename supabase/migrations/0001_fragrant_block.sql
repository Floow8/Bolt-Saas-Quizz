/*
  # Create and populate questions table

  1. New Tables
    - `questions`
      - `id` (uuid, primary key)
      - `question` (text)
      - `type` (text)
      - `category` (text)
      - `points` (integer)
      - `options` (jsonb, for multiple choice options)
      - `correct_answers` (jsonb, for correct answer indices)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `questions` table
    - Add policies for authenticated users to read questions
*/

CREATE TABLE IF NOT EXISTS questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  type text NOT NULL,
  category text NOT NULL,
  points integer NOT NULL DEFAULT 1,
  options jsonb,
  correct_answers jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

-- Create policy for reading questions
CREATE POLICY "Users can read questions"
  ON questions
  FOR SELECT
  TO authenticated
  USING (true);

-- Insert sample Mathematics questions
INSERT INTO questions (question, type, category, points, options, correct_answers) VALUES
('What is the value of π (pi) to two decimal places?', 'Multiple Choice', 'Mathematics', 2, '["3.14", "3.12", "3.16", "3.18"]', '[0]'),
('Solve for x: 2x + 5 = 13', 'Multiple Choice', 'Mathematics', 2, '["4", "6", "8", "3"]', '[0]'),
('What is the square root of 144?', 'Multiple Choice', 'Mathematics', 2, '["12", "14", "10", "16"]', '[0]'),
('What is the area of a circle with radius 5 units?', 'Multiple Choice', 'Mathematics', 3, '["78.54", "75.84", "81.23", "77.14"]', '[0]'),
('Simplify: (x² + 2x + 1) - (x² - 2x + 1)', 'Multiple Choice', 'Mathematics', 3, '["4x", "2x", "0", "-4x"]', '[0]');

-- Insert sample Science questions
INSERT INTO questions (question, type, category, points, options, correct_answers) VALUES
('What is the chemical symbol for gold?', 'Multiple Choice', 'Science', 2, '["Au", "Ag", "Fe", "Cu"]', '[0]'),
('Which planet is known as the Red Planet?', 'Multiple Choice', 'Science', 2, '["Mars", "Venus", "Jupiter", "Mercury"]', '[0]'),
('What is the process by which plants make their own food?', 'Multiple Choice', 'Science', 3, '["Photosynthesis", "Respiration", "Transpiration", "Digestion"]', '[0]'),
('What is the atomic number of oxygen?', 'Multiple Choice', 'Science', 2, '["8", "6", "10", "12"]', '[0]'),
('Which of these is not a state of matter?', 'Multiple Choice', 'Science', 2, '["Energy", "Solid", "Liquid", "Gas"]', '[0]');

-- Insert sample English questions
INSERT INTO questions (question, type, category, points, options, correct_answers) VALUES
('What is the past tense of "go"?', 'Multiple Choice', 'English', 2, '["went", "gone", "going", "goes"]', '[0]'),
('Which of these is a proper noun?', 'Multiple Choice', 'English', 2, '["London", "city", "building", "street"]', '[0]'),
('Identify the correct spelling:', 'Multiple Choice', 'English', 2, '["necessary", "necesary", "necessery", "neccesary"]', '[0]'),
('What type of word is "quickly"?', 'Multiple Choice', 'English', 2, '["Adverb", "Adjective", "Noun", "Verb"]', '[0]'),
('Which sentence is grammatically correct?', 'Multiple Choice', 'English', 3, '["She doesn\'t like coffee.", "She don\'t like coffee.", "She not like coffee.", "She doesn\'t likes coffee."]', '[0]');

-- Insert sample History questions
INSERT INTO questions (question, type, category, points, options, correct_answers) VALUES
('In which year did World War II end?', 'Multiple Choice', 'History', 2, '["1945", "1944", "1946", "1943"]', '[0]'),
('Who was the first President of the United States?', 'Multiple Choice', 'History', 2, '["George Washington", "John Adams", "Thomas Jefferson", "Benjamin Franklin"]', '[0]'),
('Which empire was ruled by Julius Caesar?', 'Multiple Choice', 'History', 2, '["Roman Empire", "Greek Empire", "Persian Empire", "Ottoman Empire"]', '[0]'),
('What was the name of the first artificial satellite in space?', 'Multiple Choice', 'History', 3, '["Sputnik 1", "Explorer 1", "Vanguard 1", "Apollo 1"]', '[0]'),
('Which civilization built the pyramids of Giza?', 'Multiple Choice', 'History', 2, '["Ancient Egyptians", "Ancient Greeks", "Romans", "Mayans"]', '[0]');