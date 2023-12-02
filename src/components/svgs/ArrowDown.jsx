const ArrowDown = ({dynamicClass, stroke}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={dynamicClass}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth={2}
        d="m1 1 6 6 6-6"
      />
    </svg>
  )
  export default ArrowDown;