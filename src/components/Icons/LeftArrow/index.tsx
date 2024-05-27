import styles from './styles.module.scss';

interface LeftArrowProps {
  onClick: () => void;
}

export function LeftArrow({ onClick }: LeftArrowProps) {
  return (
    <svg
      className={styles.arrow}
      onClick={onClick}
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        className={styles.circle}
        cx='24'
        cy='24'
        r='24'
        fill='white'
      />
      <path
        className={styles.path}
        d='M34.2852 25C34.8374 25 35.2852 24.5523 35.2852 24C35.2852 23.4477 34.8374 23 34.2852 23L34.2852 25ZM13.449 23.2929C13.0585 23.6834 13.0585 24.3166 13.449 24.7071L19.813 31.0711C20.2035 31.4616 20.8367 31.4616 21.2272 31.0711C21.6177 30.6805 21.6177 30.0474 21.2272 29.6569L15.5703 24L21.2272 18.3431C21.6177 17.9526 21.6177 17.3195 21.2272 16.9289C20.8367 16.5384 20.2035 16.5384 19.813 16.9289L13.449 23.2929ZM34.2852 23L14.1561 23L14.1561 25L34.2852 25L34.2852 23Z'
        fill='#232536'
      />
    </svg>
  );
}
