"use client"
import styles from '../page.module.css'
import Link from 'next/link'

export default function CSR_Redirect() {  
    return (
        <>
            <div className={styles.center}>
                <h1>CSR_Redirect 見出し</h1>
                <h2 className={styles.card}>
                    <Link href="https://www.yahoo.co.jp">
                        希望のリダイレクト先 YahooJAPAN
                    </Link>
                </h2>
            </div>
        </>
    )
}