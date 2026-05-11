CREATE TABLE "contact_form" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL,
	"created_at" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "project" (
	"id" serial PRIMARY KEY NOT NULL,
	"image" text NOT NULL,
	"github" text DEFAULT '' NOT NULL,
	"live" text DEFAULT '' NOT NULL,
	"demo" text DEFAULT '' NOT NULL,
	"main" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "project_translation" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" integer NOT NULL,
	"language" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "project_translation" ADD CONSTRAINT "project_translation_project_id_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE cascade ON UPDATE no action;