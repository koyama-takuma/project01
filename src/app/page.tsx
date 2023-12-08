"use client"
import styles from './page.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
//import * from 'next/router'
import React from 'react'
import useEffect from 'react'

export default function Home() {

    const router = useRouter()

    /*React.useEffect(() => {
        if ( router.asPath === '/move_link/about') {
          router.push('https://www.yahoo.co.jp')
        }
        //警告を発生させないための記載
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [router.asPath])*/

    return (
            <>
                <Head>
                    <title>aiueo</title>
                </Head>
                <div className={styles.center}>
                    <h1>
                        見出し
                    </h1>
                </div>
                    <Link
                    href='/SSR_redirectLink'
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <p>ここにSSRでのリダイレクトリンク</p>
                    </Link>

                    <Link
                    href='/CSR_redirectLink'
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <p>ここにCSRでのリダイレクトリンク</p>
                    </Link>

                    <button type="button" onClick={() => router.push('/config_redirect')}>
                        設定ファイルによるリダイレクト
                    </button>
            </>
    )
}