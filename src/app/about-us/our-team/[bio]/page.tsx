import { getPageData } from "@/utils/contentful";
import { Entry } from "contentful";
import { ComponentLoader } from "@/utils/ComponentLoader";
import styles from "@/styles/layout.module.scss";
import TeamBioHero from "@/components/organisms/TeamBioHero/TeamBioHero";

export default async function TeamBio({
  params,
}: {
  params: { bio: string };
}) {
  const page = await getPageData("teamBio", params.bio);
  const {
    content,
    commonType,
    profileImage,
    jobTitle,
    contactEmail,
    contactPhoneNumber,
    name,
  } = page?.fields;

  return (
    <>
      <TeamBioHero
        profileImage={profileImage as object}
        jobTitle={jobTitle as string}
        contactEmail={contactEmail as string}
        contactPhoneNumber={contactPhoneNumber as string}
        name={name as string}
      />
      <main className={styles.pageWrapper}>
        {content?.map((component: Entry) => {
          if (!component.fields) return;
          return (
            <ComponentLoader
              key={component.sys.id}
              data={component}
              theme={commonType}
              contentType={component?.sys?.contentType?.sys?.id}
            />
          );
        })}
      </main>
    </>
  );
}
