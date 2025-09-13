'use client'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createClient } from '@/utils/supabase/client'
import { AlertCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

const page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault()

    setIsLoading(true)
    setError('')

    if (password !== repeatPassword) {
      setError('Passwords do not match')
      setIsLoading(false)
      return
    }

    const supabase = createClient()

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/protected`,
        },
      })

      if (error) throw error

      router.push('/auth/sign-up-success')
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create an account
        </CardDescription>
        <CardAction>
          <Button variant="link">Login</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSignUp}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="repeat-password">Repeat Password</Label>
              <Input
                id="repeat-password"
                type="password"
                required
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='my-4'>
 {error && (
            <Alert variant="destructive">
              <AlertCircleIcon />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
          </div>
         
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Creating an account...' : 'Sign up'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default page
