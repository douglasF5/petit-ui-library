import { Email, Key, ChevronRight } from '../components/Icons';
import { Heading, Text, Button, TextInput, Link, Checkbox } from '../components';
import logo from '../assets/react-symbol.svg';
import { FormEvent, useState } from 'react';

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  function handleSubmit(event: FormEvent) {
    setIsUserSignedIn(true);
    event.preventDefault();
  }

  return (
    <main className="bg-background h-[100vh] px-8">
      <section className="max-w-[350px] mx-auto pt-20 flex flex-col gap-6">
        <div className="flex flex-col justify-start items-center gap-3">
          <div className="flex justify-center items-center gap-2">
            <img src={logo} />
            <Heading asChild size='L'>
              <h1>Ignite Lab</h1>
            </Heading>
          </div>
          <Text size='L' asChild>
            <h2 className="text-on-surface-secondary">Log In and start learning today!</h2>
          </Text>
        </div>

        <div className="flex flex-col justify-start gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col justify-start gap-8">
            {isUserSignedIn && (<Text>User logged in!</Text>)}

            <div className="flex flex-col justify-start gap-3">
              <div className="flex flex-col justify-start gap-4">
                <div className="flex flex-col justify-start gap-2">
                  <Text size='S' asChild>
                    <label htmlFor="emailInput">Email</label>
                  </Text>
                  <TextInput.Root>
                    <TextInput.Input id='emailInput' type='email' placeholder='Enter your email address...' />
                    <TextInput.Icon>
                      <Email />
                    </TextInput.Icon>
                  </TextInput.Root>
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <Text size='S' asChild>
                    <label htmlFor="passwordInput">Password</label>
                  </Text>
                  <TextInput.Root>
                    <TextInput.Input id='passwordInput' type='password' placeholder='Enter your password...' />
                    <TextInput.Icon>
                      <Key />
                    </TextInput.Icon>
                  </TextInput.Root>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id='c1' />
                <label htmlFor='c1' className='text-on-surface-secondary text-base-S'>Remember me for 30 days</label>
              </div>
            </div>

            <Button type='submit'>
              Log In
              <ChevronRight />
            </Button>
          </form>

          <div className="flex flex-col justify-start items-center gap-3">
            <Link url='#'>Forgot password?</Link>
            <Link url='#'>Don't have an account? Sign Up!</Link>
          </div>
        </div>

      </section>
    </main>
  );
}