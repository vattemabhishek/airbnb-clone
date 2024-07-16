'use client'

import { useEffect } from 'react'
import EmptyState from './components/EmptyState'
import React from 'react'

interface ErrorStateProps {
  error: Error
}

const Error = ({ error }: ErrorStateProps) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <EmptyState title='Uh oh' subtitle='Something went wrong' />
}

export default Error
