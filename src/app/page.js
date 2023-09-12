import styles from './page.module.css'
import { Button, Typography } from '@mui/material';
export default function Home() {
  return (
    <main className={styles.main}>
     <div>
      <Typography variant="h1">Hello, Material-UI!</Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
    </main>
  )
}
