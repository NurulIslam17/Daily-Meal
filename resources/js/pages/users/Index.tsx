import { Head, Link, usePage } from '@inertiajs/react';
import { Edit, Edit2Icon, Trash2Icon } from 'lucide-react';
import React from 'react';

const Index = () => {
    const { users } = usePage().props;
    return (
        <>
            <Head title="User" />

            <div className="space-y-6 p-6">
                {/* Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">
                            Manage User
                        </h1>
                        <p className="text-sm text-slate-500">
                            Manage users control.
                        </p>
                    </div>

                    {/* <div className="flex items-center gap-3">
                    <input
                        type="date"
                        value={mealDate}
                        onChange={handleDateChange}
                    />

                    <div className="rounded-lg border bg-white px-4 py-2 shadow-sm">
                        {new Date(mealDate).toLocaleDateString('en-US', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        })}
                    </div>
                </div> */}
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                    <div className="border-b px-6 py-4">
                        <h2 className="font-semibold text-slate-800">
                            User List
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200">
                            <thead className="bg-slate-50">
                                <tr className="border bg-slate-50 text-center">
                                    <th className="border-1 px-6 py-3 text-sm font-semibold text-slate-600">
                                        SL
                                    </th>
                                    <th className="border-1 px-6 py-3 text-sm font-semibold text-slate-600">
                                        Name
                                    </th>
                                    <th className="border-1 px-6 py-3 text-sm font-semibold text-slate-600">
                                        Email
                                    </th>
                                    <th className="border-1 px-6 py-3 text-sm font-semibold text-slate-600">
                                        Type
                                    </th>
                                    <th className="border-1 px-6 py-3 text-sm font-semibold text-slate-600">
                                        Meal Type
                                    </th>
                                    <th className="w-[100px] border-1 px-6 py-3 text-sm font-semibold text-slate-600">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {users?.length > 0 ? (
                                    users.map((user, index) => (
                                        <tr
                                            key={index}
                                            className="border-t text-center hover:bg-slate-50"
                                        >
                                            <td className="border-1 px-6 py-4">
                                                {index + 1}
                                            </td>

                                            <td className="border-1 px-6 py-4 font-medium">
                                                {user?.name || 'N/A'}
                                            </td>

                                            <td className="border-1 px-6 py-4">
                                                {user?.email || 'N/A'}
                                            </td>
                                            <td className="border-1 px-6 py-4">
                                                {user?.type || 'N/A'}
                                            </td>

                                            <td
                                                className={`border-1 px-6 py-4`}
                                            >
                                                <span
                                                    className={`rounded-full px-3 py-[2px] ${user?.user_type === 'regular' ? 'bg-green-400' : 'bg-amber-400'}`}
                                                >
                                                    {user?.user_type}
                                                </span>
                                            </td>
                                            <td className="item-center flex justify-center gap-4 border-1 px-6 py-4">
                                                {/* <Link href="#">
                                                <Trash2Icon className="text-red-600" />
                                            </Link> */}
                                                <Link
                                                    href={`/users/edit/${user.id}`}
                                                >
                                                    <Edit className="text-green-600" />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={8}
                                            className="px-6 py-10 text-center text-gray-500"
                                        >
                                            No meal requests found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
