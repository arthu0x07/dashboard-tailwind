import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { SettingsTabs } from '@components/SettingsTabs'

import * as Input from '@components/Form/Input'
import * as FileInput from '@components/Form/FileInput'

import { Select } from '@components/Form/Select'
import { SelectItem } from '@components/Form/Select/SelectItem'
import { Textarea } from '@components/Form/Textarea'
import { Button } from './components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-row items-center justify-between  border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-large font-medium text-zinc-900">
              Personal Info
            </h2>
            <span className="text-small text-zinc-500">
              Update your photo and personal details here
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              form="settings"
              type="button"
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              variant="outline"
            >
              Cancel
            </Button>

            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="font-md text-sm text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Arthur" />
              </Input.Root>

              <Input.Root>
                <Input.Control id="firstName" defaultValue="Silva" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="email" className="font-md text-sm text-zinc-700">
              Email address
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                defaultValue="arthur.santos.off@gmail.com"
                type="email"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="photo" className=" font-md text-sm text-zinc-700">
              Your Photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="Role" className="font-md text-sm text-zinc-700">
              Role
            </label>

            <Input.Root>
              <Input.Control id="Role" defaultValue="Developer" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="country" className="font-md text-sm text-zinc-700">
              Country
            </label>

            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="USA" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="timezone" className="font-md text-sm text-zinc-700">
              Timezone
            </label>

            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (PST) UTC−08:00"
              />
              <SelectItem value="utc3" text="América São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="font-md text-sm text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>

            <div className="space-y-3 ">
              <div className="grid grid-cols-2 gap-3 ">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    text="Normal Text"
                    defaultChecked
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="projects" className="font-md text-sm text-zinc-700">
              Portfolio Projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button
              form="settings"
              type="button"
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              variant="outline"
            >
              Cancel
            </Button>

            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
