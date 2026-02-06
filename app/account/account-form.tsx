// app/account/account-form.tsx
import { type User } from '@supabase/supabase-js'

export default function AccountForm({ user }: { user: User | null }) {
    if (!user) {
        return <div>Please log in to view your account.</div>
    }

    return (
        <div className="space-y-6">
            <div>
                <label>Email</label>
                <input type="text" value={user.email || ''} disabled className="w-full p-3 border rounded bg-gray-100" />
            </div>

            <form action="/auth/signout" method="post">
                <button type="submit" className="w-full py-3 bg-red-600 text-white rounded hover:bg-red-700">
                    Sign out
                </button>
            </form>
        </div>
    )
}