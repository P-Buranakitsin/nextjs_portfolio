import styles from '@/styles/components/Footer.module.scss';

export default function Footer() {
  return (
    <footer className="py-3 my-4">
      <div className="container">
        <div
          className={`text-center text-white fw-medium fs-6 ${styles.footer}`}
          onClick={() => {
            window.open(
              'https://github.com/P-Buranakitsin/nextjs_portfolio',
              '_blank'
            );
          }}
        >
          Built & Designed by Pavaruth Buranakitsin • 2023
        </div>
      </div>
    </footer>
  );
}
