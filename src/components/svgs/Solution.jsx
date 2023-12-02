const Solution = ({fill1, fill2, dynamicClass}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={dynamicClass}
      alt="solution"
    >
      <path
        fill={fill1}
        d="M67.5 23.75h-6.25v-2.5c0-1.379-1.121-2.5-2.5-2.5a2.503 2.503 0 0 0-2.5 2.5v2.5h-10V17.5c-2.758 0-5-2.242-5-5s2.242-5 5-5V5A3.755 3.755 0 0 1 50 1.25h17.5A3.755 3.755 0 0 1 71.25 5v15a3.755 3.755 0 0 1-3.75 3.75Z"
      />
      <path
        fill={fill2}
        d="M51.25 31.25c0-2.758-2.242-5-5-5s-5 2.242-5 5h-5V25h-2.5a2.503 2.503 0 0 1-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5h2.5V8.75h-3.351C19.584 8.75 8.75 19.584 8.75 32.899a24.06 24.06 0 0 0 8.858 18.69l4.892 4.004v3.388c-1.451.518-2.5 1.893-2.5 3.52 0 1.729 1.181 3.174 2.775 3.605-.174.431-.275.9-.275 1.394 0 1.653 1.081 3.043 2.567 3.541.518 4.335 4.212 7.709 8.683 7.709s8.165-3.374 8.682-7.709C43.92 70.543 45 69.153 45 67.5c0-.494-.101-.963-.275-1.395 1.594-.433 2.775-1.876 2.775-3.605 0-1.627-1.049-3.002-2.5-3.52v-3.389l4.892-4.004A24.056 24.056 0 0 0 58.75 32.9V31.25h-7.5Zm-18.351-20h.851v6.25c-2.758 0-5 2.242-5 5s2.242 5 5 5v3.75h-5c0-2.758-2.242-5-5-5s-5 2.242-5 5h-7.438c.846-11.17 10.204-20 21.587-20ZM19.19 49.654a21.555 21.555 0 0 1-7.923-15.904h9.983v-2.5c0-1.379 1.121-2.5 2.5-2.5s2.5 1.121 2.5 2.5v2.5h7.5v5c-2.758 0-5 2.242-5 5s2.242 5 5 5v10H25v-4.343l-5.81-4.753ZM33.75 76.25c-3.017 0-5.543-2.151-6.124-5h12.248c-.582 2.849-3.107 5-6.124 5Zm7.5-7.5h-15a1.251 1.251 0 0 1 0-2.5h15a1.251 1.251 0 0 1 0 2.5Zm2.5-5h-20a1.251 1.251 0 0 1 0-2.5h20a1.251 1.251 0 0 1 0 2.5Zm4.56-14.096-5.81 4.753v4.343h-6.25v-12.5h-2.5a2.503 2.503 0 0 1-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5h2.5v-7.5h7.5v-2.5c0-1.379 1.121-2.5 2.5-2.5s2.5 1.121 2.5 2.5v2.5h7.483a21.555 21.555 0 0 1-7.923 15.904Z"
      />
    </svg>
  )
  export default Solution;