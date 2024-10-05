import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function Quote() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 p-4">
      <Card className="w-full max-w-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <CardContent className="p-8 bg-white dark:bg-gray-800">
          <div className="relative">
            <svg
              className="absolute top-0 left-0 w-16 h-16 text-blue-300 dark:text-blue-600 transform -translate-x-6 -translate-y-6"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="relative z-10">
              <p className="text-2xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                "The customer support I received was exceptional. The support team went above and beyond to address my concerns and ensure my satisfaction. Their dedication to resolving issues promptly is truly commendable."
              </p>
            </blockquote>
          </div>
          <div className="mt-8 flex items-center">
            <Avatar className="h-14 w-14 border-2 border-blue-500">
              <AvatarImage src="/placeholder-user.jpg" alt="Julie Winfield" />
              <AvatarFallback>JW</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">Julie Winfield</p>
              <p className="text-base text-blue-600 dark:text-blue-400">CEO | Acme Corp</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
