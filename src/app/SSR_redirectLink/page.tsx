"use client"
import styles from '../page.module.css'
import Link from 'next/link'

export default function SSR_Redirect() {  
    return (
        <>
            <div className={styles.center}>
                <h1>SSR_Redirect 見出し</h1>
                <h2 className={styles.card}>
                </h2>
                <Link href="https://www.google.com">
                    希望のリダイレクト先 Google
                </Link>
            </div>
        </>
    )
}