import { Head, useForm, usePage } from '@inertiajs/react';
import {
    Users,
    UtensilsCrossed,
    DollarSign,
    CheckCircle,
    Clock,
    SearchXIcon,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import cost from '@/data/cost';

export default function Dashboard() {
    const { auth } = usePage().props as any;
    const { meals } = usePage().props;

    const currentHour = new Date().getHours();
    const canSubmit = currentHour < 12;
    const [day, setDay] = React.useState(
        new Date().toLocaleDateString('en-US', {
            weekday: 'long',
        }),
    );
    const [mealDate, setMealDate] = useState(
        new Date().toISOString().split('T')[0],
    );
    const { data, setData, post, processing } = useForm({
        breakfast: 0,
        breakfast_cost: 0,
        lunch: 1,
        lunch_cost: 0,
        dinner: 0,
        dinner_cost: 0,
    });

    const submit = (e) => {
        e.preventDefault();
        post('/meal-store');
    };

    const handleApprove = (id) => {
        post(`/meal-approve/${id}`);
    };

    useEffect(() => {
        setData({
            ...data,
            breakfast_cost: data.breakfast * cost[day].breakfast,
            lunch_cost: data.lunch * cost[day].lunch,
            dinner_cost: data.dinner * cost[day].dinner,
        });
    }, [data.breakfast, data.lunch, data.dinner, day]);

    console.log(data);

    return (
        <>
            <Head title="Dashboard" />

            <div className="space-y-6 p-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {/* User Count */}
                    <div className="rounded-xl border bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Total Users
                                </p>
                                <h3 className="mt-2 text-3xl font-bold">250</h3>
                            </div>
                            <Users className="h-10 w-10 text-blue-500" />
                        </div>
                    </div>

                    {/* Total Meal */}
                    <div className="rounded-xl border bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Total Meals
                                </p>
                                <h3 className="mt-2 text-3xl font-bold">
                                    1,250
                                </h3>
                            </div>
                            <UtensilsCrossed className="h-10 w-10 text-green-500" />
                        </div>
                    </div>

                    {/* Total Cost */}
                    <div className="rounded-xl border bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Total Cost
                                </p>
                                <h3 className="mt-2 text-3xl font-bold">
                                    ৳45,000
                                </h3>
                            </div>
                            <DollarSign className="h-10 w-10 text-purple-500" />
                        </div>
                    </div>

                    {/* Paid */}
                    <div className="rounded-xl border bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Paid</p>
                                <h3 className="mt-2 text-3xl font-bold">
                                    ৳38,500
                                </h3>
                            </div>
                            <CheckCircle className="h-10 w-10 text-emerald-500" />
                        </div>
                    </div>

                    {/* Pending */}
                    <div className="rounded-xl border bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Pending</p>
                                <h3 className="mt-2 text-3xl font-bold">
                                    ৳6,500
                                </h3>
                            </div>
                            <Clock className="h-10 w-10 text-orange-500" />
                        </div>
                    </div>
                </div>

                {auth.user.type === 'admin' && (
                    //    Table
                    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                        <div className="border-b px-6 py-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-lg font-semibold text-slate-900">
                                        Today's Meal Requests
                                    </h2>
                                    <p className="text-sm text-slate-500">
                                        Review and approve meal selections for
                                        employees.
                                    </p>
                                </div>
                                <div className="rounded-lg border bg-white px-4 py-2 shadow-sm">
                                    {new Date(mealDate).toLocaleDateString(
                                        'en-US',
                                        {
                                            weekday: 'long',
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        },
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">
                                            #
                                        </th>

                                        <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">
                                            User
                                        </th>

                                        <th className="px-6 py-3 text-center text-sm font-semibold text-slate-600">
                                            Breakfast
                                        </th>

                                        <th className="px-6 py-3 text-center text-sm font-semibold text-slate-600">
                                            Lunch
                                        </th>

                                        <th className="px-6 py-3 text-center text-sm font-semibold text-slate-600">
                                            Dinner
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">
                                            Request Time
                                        </th>

                                        <th className="px-6 py-3 text-center text-sm font-semibold text-slate-600">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {meals?.length > 0 ? (
                                        meals.map((meal) => (
                                            <tr
                                                key={meal.id}
                                                className="border-t hover:bg-slate-50"
                                            >
                                                <td className="px-6 py-4">
                                                    {meal.id}
                                                </td>
                                                <td className="px-6 py-4 font-medium">
                                                    {meal.user?.name}
                                                </td>

                                                <td className="px-6 py-4 text-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={
                                                            meal.breakfast > 0
                                                        }
                                                        readOnly
                                                        className="h-5 w-5"
                                                    />
                                                </td>

                                                <td className="px-6 py-4 text-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={meal.lunch > 0}
                                                        readOnly
                                                        className="h-5 w-5"
                                                    />
                                                </td>

                                                <td className="px-6 py-4 text-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={
                                                            meal.dinner > 0
                                                        }
                                                        readOnly
                                                        className="h-5 w-5"
                                                    />
                                                </td>

                                                <td className="px-6 py-4">
                                                    <span
                                                        className={`rounded-md px-2 py-1 text-sm ${
                                                            meal.status ===
                                                            'approved'
                                                                ? 'bg-blue-700 text-white'
                                                                : 'bg-yellow-300 text-black'
                                                        }`}
                                                    >
                                                        {meal.status}
                                                    </span>
                                                </td>

                                                <td className="px-6 py-4">
                                                    <span className="rounded-md bg-blue-50 px-2 py-1 text-sm text-blue-700">
                                                        {new Date(
                                                            meal.created_at,
                                                        ).toLocaleTimeString(
                                                            'en-GB',
                                                            {
                                                                hour: '2-digit',
                                                                minute: '2-digit',
                                                                hour12: true,
                                                            },
                                                        )}
                                                    </span>
                                                </td>

                                                <td className="px-6 py-4 text-center">
                                                    <button
                                                        onClick={() =>
                                                            handleApprove(
                                                                meal.id,
                                                            )
                                                        }
                                                        disabled={
                                                            meal.status ===
                                                            'approved'
                                                        }
                                                        className={`rounded-lg px-4 py-2 text-sm font-medium text-white ${
                                                            meal.status ===
                                                            'approved'
                                                                ? 'cursor-not-allowed bg-green-300'
                                                                : 'bg-green-600 hover:bg-green-700'
                                                        }`}
                                                    >
                                                        Approve
                                                    </button>
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
                )}

                {/* User PART */}

                {auth.user.type == 'user' && (
                    <div className="flex items-start justify-center">
                        <div className="w-2xl rounded-xl border bg-white p-5 shadow-sm">
                            <div className="mb-6 flex items-center justify-between space-x-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-slate-900">
                                        Meal Request
                                    </h2>
                                    <p className="mt-2 text-sm text-slate-500">
                                        Submit your meal requirements for today.
                                    </p>
                                </div>

                                <div>
                                    {new Date().toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                    <span className="mx-2">|</span>
                                    {day}
                                </div>
                            </div>

                            <form onSubmit={submit}>
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-slate-200">
                                        <thead className="bg-slate-100">
                                            <tr>
                                                <th className="border px-4 py-3 text-left">
                                                    Type
                                                </th>
                                                <th className="border px-4 py-3 text-center">
                                                    Quantity
                                                </th>
                                                <th className="border px-4 py-3 text-center">
                                                    Cost
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="border px-4 py-3">
                                                    Breakfast
                                                </td>
                                                <td className="border px-4 py-3">
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        value={data.breakfast}
                                                        onChange={(e) =>
                                                            setData(
                                                                'breakfast',
                                                                Number(
                                                                    e.target
                                                                        .value,
                                                                ),
                                                            )
                                                        }
                                                        className="w-full rounded border p-2"
                                                    />
                                                </td>
                                                <td className="border px-4 py-3">
                                                    <input
                                                        type="number"
                                                        disabled
                                                        min="0"
                                                        value={
                                                            data.breakfast_cost
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                'breakfast_cost',
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="w-full rounded border p-2"
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border px-4 py-3">
                                                    Lunch
                                                </td>
                                                <td className="border px-4 py-3">
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        value={data.lunch}
                                                        onChange={(e) =>
                                                            setData(
                                                                'lunch',
                                                                Number(
                                                                    e.target
                                                                        .value,
                                                                ),
                                                            )
                                                        }
                                                        className="w-full rounded border p-2"
                                                    />
                                                </td>
                                                <td className="border px-4 py-3">
                                                    <input
                                                        type="number"
                                                        disabled
                                                        min="0"
                                                        value={data.lunch_cost}
                                                        onChange={(e) =>
                                                            setData(
                                                                'lunch_cost',
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="w-full rounded border p-2"
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border px-4 py-3">
                                                    Dinner
                                                </td>
                                                <td className="border px-4 py-3">
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        value={data.dinner}
                                                        onChange={(e) =>
                                                            setData(
                                                                'dinner',
                                                                Number(
                                                                    e.target
                                                                        .value,
                                                                ),
                                                            )
                                                        }
                                                        className="w-full rounded border p-2"
                                                    />
                                                </td>
                                                <td className="border px-4 py-3">
                                                    <input
                                                        type="number"
                                                        disabled
                                                        min="0"
                                                        value={data.dinner_cost}
                                                        onChange={(e) =>
                                                            setData(
                                                                'dinner_cost',
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="w-full rounded border p-2"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {canSubmit ? (
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white"
                                    >
                                        Submit Request
                                    </button>
                                ) : (
                                    <p className="mt-4 text-center text-red-600">
                                        Meal requests are closed after 10:00 AM.
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
