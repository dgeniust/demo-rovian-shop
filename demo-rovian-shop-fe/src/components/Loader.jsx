import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      {/* Container bên ngoài nền đen tối giản */}
      <div className="loader-container">
        <div className="loader">
          {/* R */}
          <svg viewBox="0 0 64 64" className="char">
            <path
              className="dash"
              d="M12 60V4H35C45 4 48 12 48 18C48 24 45 32 35 32H12M32 32L48 60"
              pathLength="360"
            />
          </svg>

          {/* O */}
          <svg viewBox="0 0 64 64" className="char char-o">
            <path
              className="spin"
              d="M32 5A27 27 0 1 1 31.9 5"
              pathLength="360"
            />
          </svg>

          {/* V */}
          <svg viewBox="0 0 64 64" className="char">
            <path className="dash" d="M8 4L32 60L56 4" pathLength="360" />
          </svg>

          {/* I */}
          <svg viewBox="0 0 64 64" className="char">
            <path
              className="dash"
              d="M32 4V60M16 4H48M16 60H48"
              pathLength="360"
            />
          </svg>

          {/* A */}
          <svg viewBox="0 0 64 64" className="char">
            <path
              className="dash"
              d="M32 4L8 60M32 4L56 60M16 42H48"
              pathLength="360"
            />
          </svg>

          {/* N */}
          <svg viewBox="0 0 64 64" className="char">
            <path className="dash" d="M12 60V4L52 60V4" pathLength="360" />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
};

// Sử dụng màu trắng để tạo tương phản cao cấp trên nền đen
const strokeColor = "#ffffff";

const StyledWrapper = styled.div`
  /* Thiết lập nền tối cho toàn bộ khu vực chứa loader */
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #0a0a0a; /* Chuyển sang nền đen tuyền */
  }

  .loader {
    display: flex;
    gap: 8px; /* Khoảng cách giữa các chữ cái */
    justify-content: center;
    align-items: center;
  }

  .char {
    width: 40px;
    height: 40px;
    display: inline-block;
  }

  .char path {
    fill: none;
    stroke: ${strokeColor}; /* Nét vẽ màu trắng sáng */
    stroke-width: 6; /* Giảm nhẹ độ dày nét để trông thanh lịch và sắc sảo hơn */
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Riêng chữ O nét dày hơn chút để giữ hiệu ứng quay đẹp */
  .char-o path {
    stroke-width: 8;
  }

  .dash {
    animation:
      dashArray 2s ease-in-out infinite,
      dashOffset 2s linear infinite;
  }

  .spin {
    animation:
      spinDashArray 2s ease-in-out infinite,
      spin 8s ease-in-out infinite,
      dashOffset 2s linear infinite;
    transform-origin: center;
  }

  @keyframes dashArray {
    0% {
      stroke-dasharray: 0 1 359 0;
    }
    50% {
      stroke-dasharray: 0 359 1 0;
    }
    100% {
      stroke-dasharray: 359 1 0 0;
    }
  }

  @keyframes spinDashArray {
    0% {
      stroke-dasharray: 270 90;
    }
    50% {
      stroke-dasharray: 0 360;
    }
    100% {
      stroke-dasharray: 270 90;
    }
  }

  @keyframes dashOffset {
    0% {
      stroke-dashoffset: 365;
    }
    100% {
      stroke-dashoffset: 5;
    }
  }

  @keyframes spin {
    0% {
      rotate: 0deg;
    }
    12.5%,
    25% {
      rotate: 270deg;
    }
    37.5%,
    50% {
      rotate: 540deg;
    }
    62.5%,
    75% {
      rotate: 810deg;
    }
    87.5%,
    100% {
      rotate: 1080deg;
    }
  }
`;

export default Loader;
