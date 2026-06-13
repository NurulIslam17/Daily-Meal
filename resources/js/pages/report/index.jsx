import { Head } from '@inertiajs/react';
import React from 'react';
import { Search, CheckCircle, XIcon, XCircleIcon } from 'lucide-react';

const reports = [
    {
        id: 1,
        user: 'John Doe',
        totalMeal: 25,
        totalCost: 3000,
        status: 'Paid',
    },
    {
        id: 2,
        user: 'Jane Smith',
        totalMeal: 18,
        totalCost: 2160,
        status: 'Unpaid',
    },
    {
        id: 3,
        user: 'Michael Lee',
        totalMeal: 30,
        totalCost: 3600,
        status: 'Unpaid',
    },
];

const Index = () => {
    return (
        <>
            <Head title="Report" />

            <div className="space-y-6 p-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Meal Report
                    </h1>
                    <p className="text-sm text-slate-500">
                        Monthly meal consumption and payment report.
                    </p>
                </div>


                {/* Report Table */}
                <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                    <div className="border-b px-6 py-4">
                        <h2 className="font-semibold text-slate-800">
                            User Payment Report
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold">
                                        SL
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold">
                                        User
                                    </th>

                                    <th className="px-6 py-3 text-left text-sm font-semibold">
                                        Total Meal
                                    </th>

                                    <th className="px-6 py-3 text-left text-sm font-semibold">
                                        Total Cost
                                    </th>

                                    <th className="px-6 py-3 text-left text-sm font-semibold">
                                        Status
                                    </th>

                                    <th className="px-6 py-3 text-center text-sm font-semibold">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {reports.map((report) => (
                                    <tr
                                        key={report.id}
                                        className="border-t hover:bg-slate-50"
                                    >
                                        <td className="px-6 py-4">
                                            {report.id}
                                        </td>

                                        <td className="px-6 py-4">
                                            {report.user}
                                        </td>
                                        <td className="px-6 py-4">
                                            {report.totalMeal}
                                        </td>

                                        <td className="px-6 py-4 font-semibold">
                                            ৳ {report.totalCost}
                                        </td>

                                        <td className="px-6 py-4">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-medium ${
                                                    report.status === 'Paid'
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-red-100 text-red-700'
                                                }`}
                                            >
                                                {report.status}
                                            </span>
                                        </td>

                                    
                                        <td className="px-6 py-4 text-center">
                                           
                                                <button className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700">
                                                    <CheckCircle size={16} />
                                                    Mark as Paid
                                                </button>
                                        
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
