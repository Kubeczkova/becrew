CREATE TABLE "category" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"subtitle" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "categoryTranslation" (
	"id" serial PRIMARY KEY NOT NULL,
	"language" varchar(2),
	"title" text,
	"subtitle" text,
	"category_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "project" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"image" varchar(256),
	"description" text
);
--> statement-breakpoint
CREATE TABLE "projectSkill" (
	"project" integer NOT NULL,
	"skill" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projectTranslation" (
	"id" serial PRIMARY KEY NOT NULL,
	"language" varchar(2),
	"description" text,
	"project_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "skill" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"image" varchar(256),
	"category" integer
);
--> statement-breakpoint
ALTER TABLE "categoryTranslation" ADD CONSTRAINT "categoryTranslation_category_id_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projectSkill" ADD CONSTRAINT "projectSkill_project_project_id_fk" FOREIGN KEY ("project") REFERENCES "public"."project"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projectSkill" ADD CONSTRAINT "projectSkill_skill_skill_id_fk" FOREIGN KEY ("skill") REFERENCES "public"."skill"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projectTranslation" ADD CONSTRAINT "projectTranslation_project_id_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "skill" ADD CONSTRAINT "skill_category_category_id_fk" FOREIGN KEY ("category") REFERENCES "public"."category"("id") ON DELETE no action ON UPDATE no action;