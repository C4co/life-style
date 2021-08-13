import React from 'react'
import style from './welcome.module.scss'

export function Welcome(){
  return (
    <div className={style.welcome}>
      <h1 className={style.title}> CN Next starter </h1>
      <p className={style.description}> Stater project with Next and TypeScript. </p>
    </div>
  )
}
