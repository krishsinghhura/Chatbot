# AI Chatbot

This project is an AI-powered chatbot built using React for the frontend and Express.js with Hugging Face's `@huggingface/inference` API for text generation on the backend.

## Features

- User-friendly chat interface
- AI-generated responses using Falcon-7B model
- Real-time message handling
- Express.js backend for handling requests

## Technologies Used

### Frontend:

- React.js
- Axios for API requests
- Tailwind CSS for styling

### Backend:

- Node.js with Express.js
- `@huggingface/inference` for AI-powered text generation
- `dotenv` for managing API keys
- `cors` and `body-parser` for handling requests

## Installation and Setup

### Prerequisites

- Node.js installed
- A Hugging Face API key

### Steps to Run

#### Backend

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/ai-chatbot.git
   cd ai-chatbot
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your Hugging Face API key:
   ```env
   HUGGINGFACE_API_KEY=your_api_key_here
   ```
4. Start the backend server:
   ```sh
   node server.js
   ```

#### Frontend

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```

## Usage

- Enter text into the input field and press "Send" to receive an AI-generated response.
- The chat interface will display both user and AI messages in real-time.

## License

This project is open-source and available under the MIT License.

## Contributing

Feel free to submit issues or pull requests to improve the project!
