import styles from '../Styles/NotFound.module.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container fluid className='h-screen position-relative bg-warning-subtle'>
      <p className={styles.appName}>Cafecord</p>
      <p className={styles.error404}>
        Error
        <br></br>
        404
      </p>
      <p className={`${styles.description}`}>
        Oops! Looks like you've reached a decaffeinated page. Better brew up a
        new link! Click &nbsp;
        <Link to={'/'} className={styles.anchor} aria-label='go to home page'>
          here 
        </Link>
        &nbsp; to go home.
      </p>
    </Container>
  );
}
