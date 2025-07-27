import { useForm } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { FormEventHandler } from 'react';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen bg-white">
            <Head title="Daftar" />
            <div className="flex min-h-screen">
                {/* Left Side - Hero Image */}
                <div className="hidden lg:flex lg:w-1/2 relative">
                <img
                    src="/images/auth/children-playing.png"
                    alt="School children playing in courtyard"
                    className="w-full h-full object-cover"
                />
                </div>

                {/* Right Side - Signup Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
                    <div className="w-full max-w-md mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-4 text-foreground">
                        Buat akun <span className='text-primary'>Classix</span>
                    </h1>
                    <p className='text-sm text-muted-foreground text-center mb-4'>Sudah punya akun? <a href={route('login')} className='text-primary'>Masuk disini</a></p>

                    <form onSubmit={submit} className="space-y-6">
                        {/* Full Name */}
                        <div className="space-y-2">
                            <Label className="text-foreground font-medium">Nama Lengkap</Label>
                            <Input
                            type="text"
                            name="name"
                            placeholder="Cth: Dimas Eka Putra"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="bg-white"
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label className="text-foreground font-medium">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Cth: namaanda123@gmail.com"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="bg-white"
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        {/* Password */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-2">
                                <Label className="text-foreground font-medium">Password</Label>
                                <Input
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="bg-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-foreground font-medium">Konfirmasi Password</Label>
                                <Input
                                type="password"
                                name="confirmPassword"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                className="bg-white"
                                />
                            </div>
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        {/* Submit Button */}
                        <Button 
                        type="submit" 
                        className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
                        >
                        Buat Akun
                        <ArrowRight className="w-4 h-4" />
                        </Button>

                        {/* Social Sign Up */}
                        <div className="space-y-4">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-muted-foreground">Daftar dengan akun</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <Button
                            disabled
                            type="button"
                            variant="outline"
                            className="w-full py-3 flex items-center justify-center gap-2 border-border hover:bg-gray-50"
                            >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <span className="text-sm">Facebook</span>
                            </Button>

                            <Button
                            disabled
                            type="button"
                            variant="outline"
                            className="w-full py-3 flex items-center justify-center gap-2 border-border hover:bg-gray-50"
                            >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <span className="text-sm">Google</span>
                            </Button>

                            <Button
                            disabled
                            type="button"
                            variant="outline"
                            className="w-full py-3 flex items-center justify-center gap-2 border-border hover:bg-gray-50"
                            >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#00BCF2" d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z"/>
                            </svg>
                            <span className="text-sm">Microsoft</span>
                            </Button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        // <AuthLayout title="Create an account" description="Enter your details below to create your account">
        //     <Head title="Register" />
        //     <form className="flex flex-col gap-6" onSubmit={submit}>
        //         <div className="grid gap-6">
        //             <div className="grid gap-2">
        //                 <Label htmlFor="name">Name</Label>
        //                 <Input
        //                     id="name"
        //                     type="text"
        //                     required
        //                     autoFocus
        //                     tabIndex={1}
        //                     autoComplete="name"
        //                     value={data.name}
        //                     onChange={(e) => setData('name', e.target.value)}
        //                     disabled={processing}
        //                     placeholder="Full name"
        //                 />
        //                 <InputError message={errors.name} className="mt-2" />
        //             </div>

        //             <div className="grid gap-2">
        //                 <Label htmlFor="email">Email address</Label>
        //                 <Input
        //                     id="email"
        //                     type="email"
        //                     required
        //                     tabIndex={2}
        //                     autoComplete="email"
        //                     value={data.email}
        //                     onChange={(e) => setData('email', e.target.value)}
        //                     disabled={processing}
        //                     placeholder="email@example.com"
        //                 />
        //                 <InputError message={errors.email} />
        //             </div>

        //             <div className="grid gap-2">
        //                 <Label htmlFor="password">Password</Label>
        //                 <Input
        //                     id="password"
        //                     type="password"
        //                     required
        //                     tabIndex={3}
        //                     autoComplete="new-password"
        //                     value={data.password}
        //                     onChange={(e) => setData('password', e.target.value)}
        //                     disabled={processing}
        //                     placeholder="Password"
        //                 />
        //                 <InputError message={errors.password} />
        //             </div>

        //             <div className="grid gap-2">
        //                 <Label htmlFor="password_confirmation">Confirm password</Label>
        //                 <Input
        //                     id="password_confirmation"
        //                     type="password"
        //                     required
        //                     tabIndex={4}
        //                     autoComplete="new-password"
        //                     value={data.password_confirmation}
        //                     onChange={(e) => setData('password_confirmation', e.target.value)}
        //                     disabled={processing}
        //                     placeholder="Confirm password"
        //                 />
        //                 <InputError message={errors.password_confirmation} />
        //             </div>

        //             <Button type="submit" className="mt-2 w-full" tabIndex={5} disabled={processing}>
        //                 {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
        //                 Create account
        //             </Button>
        //         </div>

        //         <div className="text-center text-sm text-muted-foreground">
        //             Already have an account?{' '}
        //             <TextLink href={route('login')} tabIndex={6}>
        //                 Log in
        //             </TextLink>
        //         </div>
        //     </form>
        // </AuthLayout>
    );
}
