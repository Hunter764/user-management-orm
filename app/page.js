
import UserForm from "@/components/user-form";
import { UserList } from "@/components/user-list";
import { ThemeToggle } from "@/components/theme-toggle";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-all duration-[2000ms] ease-in-out">
      <div className="container mx-auto p-6 max-w-4xl">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-light tracking-tight mb-2 transition-colors duration-[2000ms] ease-in-out">User Management</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-[2000ms] ease-in-out">
              Basic CRUD operations with Drizzle ORM and PostgreSQL
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-light mb-4 transition-colors duration-[2000ms] ease-in-out">Users</h2>
            <UserList/>
          </div>

          <div>
            <h2 className="text-xl font-light mb-4 transition-colors duration-[2000ms] ease-in-out">Add User</h2>
            <UserForm />
          </div>
        </div>
      </div>
    </div>
  );
}
