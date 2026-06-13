import { Head, router, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';

const Index = () => {
    const { meals } = usePage().props;
    const [mealDate, setMealDate] = useState(
        new Date().toISOString().split('T')[0],
    );

    const handleDateChange = (e) => {
        const date = e.target.value;
        setMealDate(date);
        console.log(date);

        router.get(
            '/meal',
            { date },
            {
                preserveState: true,
                replace: true,
            },
        );
    };

    return (
        <>
            <Head title="Meal" />

            <div className="space-y-6 p-6">
                {/* Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">
                            Meal Management
                        </h1>
                        <p className="text-sm text-slate-500">
                            Manage meal packages and pricing.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
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
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                    <div className="border-b px-6 py-4">
                        <h2 className="font-semibold text-slate-800">
                            Meal List
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200">
                            <thead className="bg-slate-50">
                                <tr className="border text-center">
                                    <th
                                        rowSpan={2}
                                        className="border-1 px-6 py-3 text-sm font-semibold text-slate-600"
                                    >
                                        SL
                                    </th>
                                    <th
                                        rowSpan={2}
                                        className="border-1 px-6 py-3 text-sm font-semibold text-slate-600"
                                    >
                                        User
                                    </th>
                                    <th
                                        colSpan={2}
                                        className="border-1 px-6 py-3 text-sm font-semibold text-slate-600"
                                    >
                                        Breakfast
                                    </th>
                                    <th
                                        colSpan={2}
                                        className="border-1 px-6 py-3 text-sm font-semibold text-slate-600"
                                    >
                                        Lunch
                                    </th>
                                    <th
                                        colSpan={2}
                                        className="border-1 px-6 py-3 text-sm font-semibold text-slate-600"
                                    >
                                        Dinner
                                    </th>
                                    <th
                                        rowSpan={2}
                                        className="border-1 px-6 py-3 text-sm font-semibold text-slate-600"
                                    >
                                        Total
                                    </th>
                                </tr>
                                <tr className="border bg-slate-50 text-center">
                                    <th className="border-1 px-6 py-3 text-sm font-semibold text-slate-600">
                                        QTY
                                    </th>
                                    <th className="border-1 px-6 py-3 text-sm font-semibold text-slate-600">
                                        Cost
                                    </th>
                                    <th className="border-1 px-6 py-3 text-sm font-semibold text-slate-600">
                                        QTY
                                    </th>
                                    <th className="border-1 px-6 py-3 text-sm font-semibold text-slate-600">
                                        Cost
                                    </th>
                                    <th className="border-1 px-6 py-3 text-sm font-semibold text-slate-600">
                                        QTY
                                    </th>
                                    <th className="border-1 px-6 py-3 text-sm font-semibold text-slate-600">
                                        Cost
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {meals?.length > 0 ? (
                                    meals.map((meal) => (
                                        <tr
                                            key={meal.id}
                                            className="border-t text-center hover:bg-slate-50"
                                        >
                                            <td className="border-1 px-6 py-4">
                                                {meal.id}
                                            </td>

                                            <td className="border-1 px-6 py-4 font-medium">
                                                {meal?.user?.name || 'N/A'}
                                            </td>

                                            <td className="border-1 px-6 py-4">
                                                {meal.breakfast}
                                            </td>
                                            <td className="border-1 px-6 py-4">
                                                ৳ {meal.breakfast_cost}
                                            </td>

                                            <td className="border-1 px-6 py-4">
                                                {meal.lunch}
                                            </td>
                                            <td className="border-1 px-6 py-4">
                                                ৳ {meal.lunch_cost}
                                            </td>

                                            <td className="border-1 px-6 py-4">
                                                {meal.dinner}
                                            </td>
                                            <td className="border-1 px-6 py-4">
                                                ৳ {meal.dinner_cost}
                                            </td>

                                            <td className="border-1 px-6 py-4">
                                                ৳{' '}
                                                {meal.breakfast_cost +
                                                    meal.lunch_cost +
                                                    meal.dinner_cost}
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
