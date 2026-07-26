import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "none",
        background: "#0d47a1",
        color: "#fff",
        cursor: "pointer",
        zIndex: 999,
      }}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTopButton;