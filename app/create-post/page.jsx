'use client'

import { useEffect } from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from 'react-hook-form'
// components
import PostForm from '@components/Form/PostForm'

const CreatePost = () => {
  const { data: session } = useSession()
  const router = useRouter()

  // go back to homepage when user logout
  useEffect(() => {
    if (session === null) {
      return router.push('/')
    }
  }, [session])

  // form
  const createPostForm = useForm({
    defaultValues: {
      postImage: '',
      description: '',
      tags: ''
    }
  })

  return (
    <FormProvider {...createPostForm}>
      <PostForm type="Create" />
    </FormProvider>
  )
}

export default CreatePost
