CREATE TABLE "project_theme" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" integer NOT NULL,
	"page_background" text DEFAULT '#1a1a1a' NOT NULL,
	"form_background" text DEFAULT '#ffffff' NOT NULL,
	"page_text" text DEFAULT '#f4d03f' NOT NULL,
	"form_text" text DEFAULT '#1a1a1a' NOT NULL,
	CONSTRAINT "project_theme_project_id_unique" UNIQUE("project_id")
);
--> statement-breakpoint
ALTER TABLE "contact_form" ADD COLUMN "url" text NOT NULL;--> statement-breakpoint
ALTER TABLE "project" ADD COLUMN "seo_name" text DEFAULT '';--> statement-breakpoint
ALTER TABLE "project_theme" ADD CONSTRAINT "project_theme_project_id_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE cascade ON UPDATE no action;
--> statement-breakpoint
INSERT INTO "project" ("image", "github", "live", "demo", "main", "seo_name")
VALUES ('/projects/meeple.webp', 'https://git.kropcloud.net/Beeebooo/MEEPLE', '', '', true, 'meeple-cafe');
--> statement-breakpoint
INSERT INTO "project" ("image", "github", "live", "demo", "main", "seo_name")
VALUES ('/projects/becrew.webp', 'https://git.kropcloud.net/Beeebooo/Portfolio', '', '', true, 'becrew');
--> statement-breakpoint
INSERT INTO "project_translation" ("project_id", "language", "title", "description")
SELECT "id", 'cs', 'Meeple Café', 'Webová stránka pro kavárnu'
FROM "project" WHERE "seo_name" = 'meeple-cafe';
--> statement-breakpoint
INSERT INTO "project_translation" ("project_id", "language", "title", "description")
SELECT "id", 'en', 'Meeple Café', 'Website for a café'
FROM "project" WHERE "seo_name" = 'meeple-cafe';
--> statement-breakpoint
INSERT INTO "project_translation" ("project_id", "language", "title", "description")
SELECT "id", 'cs', 'Beeebooo Crew', 'Vlastní web naší Crew'
FROM "project" WHERE "seo_name" = 'becrew';
--> statement-breakpoint
INSERT INTO "project_translation" ("project_id", "language", "title", "description")
SELECT "id", 'en', 'Beeebooo Crew', 'Own website for our Crew'
FROM "project" WHERE "seo_name" = 'becrew';
--> statement-breakpoint
INSERT INTO "project_theme" ("project_id", "page_background", "form_background", "page_text", "form_text")
SELECT "id", '#2c1a0e', '#fff8f0', '#fff8f0', '#2c1a0e'
FROM "project" WHERE "seo_name" = 'meeple-cafe';