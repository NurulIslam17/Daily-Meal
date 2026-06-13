import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage().props as any;

    return (
        <>
            <Head title="Meal Management System" />

            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white md:px-24">
                {/* Navbar */}
                <nav className="container mx-auto flex items-center justify-between px-6 py-5">
                    <h1 className="text-2xl font-bold text-orange-600">
                        Meal Management
                    </h1>

                    <div className="flex gap-3">
                        {auth?.user ? (
                            <Link
                                href="/dashboard"
                                className="rounded-lg bg-orange-600 px-5 py-2 text-white hover:bg-orange-700"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="rounded-lg border px-5 py-2 hover:bg-gray-100"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    className="rounded-lg bg-orange-600 px-5 py-2 text-white hover:bg-orange-700"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="container mx-auto px-6 py-20">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="mb-6 text-5xl font-bold leading-tight">
                                Smart Meal Management
                                <span className="text-orange-600">
                                    {' '}
                                    For Your Team
                                </span>
                            </h1>

                            <p className="mb-8 text-lg text-gray-600">
                                Easily request meals, approve requests,
                                manage costs, and generate reports from one
                                centralized platform.
                            </p>

                            <div className="flex gap-4">
                                <Link
                                    href="/login"
                                    className="rounded-xl bg-orange-600 px-8 py-3 text-white shadow hover:bg-orange-700"
                                >
                                    Get Started
                                </Link>

                                <a
                                    href="#features"
                                    className="rounded-xl border px-8 py-3 hover:bg-gray-50"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
                                alt="Meal Management"
                                className="rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section
                    id="features"
                    className="bg-white py-20"
                >
                    <div className="container mx-auto px-6">
                        <h2 className="mb-12 text-center text-3xl font-bold">
                            Features
                        </h2>

                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="rounded-2xl border p-6 shadow-sm">
                                <h3 className="mb-3 text-xl font-semibold">
                                    Meal Requests
                                </h3>
                                <p className="text-gray-600">
                                    Employees can submit breakfast, lunch,
                                    and dinner requests quickly.
                                </p>
                            </div>

                            <div className="rounded-2xl border p-6 shadow-sm">
                                <h3 className="mb-3 text-xl font-semibold">
                                    Approval Workflow
                                </h3>
                                <p className="text-gray-600">
                                    Managers can review and approve meal
                                    requests efficiently.
                                </p>
                            </div>

                            <div className="rounded-2xl border p-6 shadow-sm">
                                <h3 className="mb-3 text-xl font-semibold">
                                    Reports & Analytics
                                </h3>
                                <p className="text-gray-600">
                                    Track meal costs and generate detailed
                                    reports instantly.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t bg-gray-50 py-6 text-center text-gray-500">
                    © {new Date().getFullYear()} Meal Management System. All
                    rights reserved.
                </footer>
            </div>
        </>
    );
}