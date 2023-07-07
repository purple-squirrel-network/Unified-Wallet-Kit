import * as React from 'react';

const AlertInfo = ({ width, height }: { width: string | number; height: string | number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 38C24.0388 38 28.8711 35.9977 32.4351 32.4351C35.9976 28.871 38 24.0384 38 19C38 13.9616 35.9977 9.12887 32.4351 5.56489C28.871 2.00239 24.0384 0 19 0C13.9616 0 9.12887 2.00226 5.56489 5.56489C2.00239 9.12904 0 13.9616 0 19C0 24.0384 2.00226 28.8711 5.56489 32.4351C9.12904 35.9976 13.9616 38 19 38ZM18.7312 6.90418C19.6614 6.90418 20.4992 7.46493 20.8554 8.32424C21.2117 9.18354 21.0154 10.1715 20.3574 10.8295C19.6993 11.4876 18.7114 11.6839 17.8521 11.3276C16.9927 10.9714 16.432 10.1335 16.432 9.20335C16.432 7.93339 17.4612 6.90422 18.7311 6.90422L18.7312 6.90418ZM15.6733 16.7652C15.1818 16.6151 14.8454 16.1648 14.8421 15.6503C14.8404 15.0087 15.3616 14.4875 16.0048 14.4875H20.5716C20.6524 14.4875 20.7316 14.5188 20.7893 14.5782C20.8487 14.6359 20.88 14.7151 20.88 14.7976V26.252C20.88 27.997 21.675 28.6089 22.3265 28.8167V28.8183C22.818 28.9684 23.1544 29.4187 23.1594 29.9316C23.1594 30.2417 23.0357 30.5369 22.818 30.7546C22.6003 30.974 22.3034 31.096 21.995 31.096H16.0045C15.6961 31.096 15.3992 30.974 15.1815 30.7546C14.9638 30.5369 14.8401 30.2417 14.8401 29.9316C14.845 29.4187 15.1815 28.9684 15.673 28.8183C16.3245 28.6105 17.1194 27.9986 17.1194 26.2537V19.3314C17.1194 17.5864 16.3245 16.9745 15.673 16.765L15.6733 16.7652Z"
        fill="#4CD1F9"
      />
    </svg>
  );
};

export default AlertInfo;
