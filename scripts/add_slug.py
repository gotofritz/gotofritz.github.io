#!/usr/bin/env python3
import os
import re
import sys
from pathlib import Path


def extract_slug_from_filename(filename):
    """Extract slug from filename, removing date prefix if present."""
    # Remove .md extension
    name = filename.replace(".md", "")
    # Remove date prefix if present (YYYY-MM-DD-)
    name = re.sub(r"^\d{4}-\d{2}-\d{2}-", "", name)
    return name


def process_file(filepath):
    """Process a single markdown file."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Check if file has frontmatter
    parts = content.split("---\n", 2)
    if len(parts) < 3:
        print(f"Skipping {filepath}: No frontmatter found")
        return

    # Check if frontmatter already has slug
    frontmatter = parts[1]
    if re.search(r"^slug:", frontmatter, re.MULTILINE):
        print(f"Skipping {filepath}: Already has slug")
        return

    # Extract slug from filename
    filename = os.path.basename(filepath)
    slug = extract_slug_from_filename(filename)

    # Add slug to frontmatter
    new_frontmatter = frontmatter.rstrip() + f"\nslug: {slug}\n"
    new_content = f"---\n{new_frontmatter}---\n{parts[2]}"

    # Write back to file
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Added slug to {filepath}")


def main():
    if len(sys.argv) != 2:
        print("Usage: script.py <folder_path>")
        sys.exit(1)

    folder_path = Path(os.path.abspath(sys.argv[1]))
    if not folder_path.is_dir():
        print(f"Error: {folder_path} is not a directory")
        sys.exit(1)
    else:
        print(f"Processing files in {folder_path.absolute()}")

    # Process all .md files in the folder
    for filepath in folder_path.glob("**/*.md"):
        print(f"Processing {filepath}")
        try:
            process_file(filepath)
        except Exception as e:
            print(f"Error processing {filepath}: {e}")


if __name__ == "__main__":
    main()
