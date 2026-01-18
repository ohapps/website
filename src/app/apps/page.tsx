import { AppList } from '@/components/app-list';
import { getApps } from '@/data/apps';
import { REVALIDATE_INTERVAL } from '@/config/site';

export const revalidate = REVALIDATE_INTERVAL;

export default async function AppsPage() {
  const apps = await getApps();
  return (
    <div>
      <div className="flex flex-col items-center space-y-4 text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Applications
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Browse our collection of web applications
        </p>
      </div>
      <AppList apps={apps} />
    </div>
  );
}
