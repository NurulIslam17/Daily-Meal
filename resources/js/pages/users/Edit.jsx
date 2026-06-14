import { Head, Link } from '@inertiajs/react';
import { ListIcon } from 'lucide-react';
import React, { useState } from 'react';

const Edit = ({ user }) => {
    const [form, setForm] = useState({
        name: user?.name || '',
        email: user?.email || '',
        user_type: user?.user_type || '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Head title="User" />

            <div className="space-y-6 p-6">
                {/* Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">
                            Edit User
                        </h1>
                        <p className="text-sm text-slate-500">Edit User Info</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/users"
                            className="flex gap-2 rounded-lg bg-green-400 px-4 py-2"
                        >
                            {' '}
                            <ListIcon /> Back To List
                        </Link>
                    </div>
                </div>

                <div className="item-center flex justify-center overflow-hidden">
                    <div className="w-xl border p-4">
                        <form method="POST" action={`/users/update/${user.id}`}>
                            {/* Laravel spoof PUT method */}
                            <input type="hidden" name="_method" value="POST" />

                            {/* CSRF token */}
                            <input
                                type="hidden"
                                name="_token"
                                value={window.csrf_token}
                            />

                            <div className="mb-4">
                                <label>Name</label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full border p-2"
                                />
                            </div>

                            <div className="mb-4">
                                <label>Email</label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full border p-2"
                                />
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <label className="mb-2 block">
                                    User Type :{' '}
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="user_type"
                                        value="regular"
                                        checked={form.user_type === 'regular'}
                                        onChange={handleChange}
                                    />
                                    Regular
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="user_type"
                                        value="irregular"
                                        checked={form.user_type === 'irregular'}
                                        onChange={handleChange}
                                    />
                                    Irregular
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="mt-4 bg-green-600 px-4 py-2 text-white"
                            >
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
