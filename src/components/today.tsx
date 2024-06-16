import { Heading, Button, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@components/ui';

export function Today() {
  return (
    <div className="flex justify-between pt-10 lg:w-[560px]">
      <Heading as="h3">Today</Heading>
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="group h-fit p-1 hover:bg-blue-50 hover:fill-blue-500 hover:text-blue-500"
              variant="ghost"
            >
              <svg
                className="fill-slate-400 group-hover:fill-blue-500"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.96465 7.48232L8.96971 8.47727L7.18638 6.69313L7.18586 15.9601H5.77879L5.77931 6.69313L3.99495 8.47727L3 7.48232L6.48232 4L9.96465 7.48232ZM17 13.1813L13.5176 16.6636L10.0354 13.1813L11.0303 12.1863L12.8147 13.9705L12.8141 4.70353H14.2212L14.2217 13.9705L16.0051 12.1863L17 13.1813Z" />
              </svg>
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="group h-fit p-1 hover:bg-blue-50 hover:fill-blue-500 hover:text-blue-500"
              variant="ghost"
            >
              <svg
                className="fill-slate-400 group-hover:fill-blue-500"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.16667 9C3.525 9 3 9.525 3 10.1667C3 10.8083 3.525 11.3333 4.16667 11.3333C4.80833 11.3333 5.33333 10.8083 5.33333 10.1667C5.33333 9.525 4.80833 9 4.16667 9ZM15.8333 9C15.1917 9 14.6667 9.525 14.6667 10.1667C14.6667 10.8083 15.1917 11.3333 15.8333 11.3333C16.475 11.3333 17 10.8083 17 10.1667C17 9.525 16.475 9 15.8333 9ZM10 9C9.35833 9 8.83333 9.525 8.83333 10.1667C8.83333 10.8083 9.35833 11.3333 10 11.3333C10.6417 11.3333 11.1667 10.8083 11.1667 10.1667C11.1667 9.525 10.6417 9 10 9Z" />
              </svg>
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    </div>
  );
}
