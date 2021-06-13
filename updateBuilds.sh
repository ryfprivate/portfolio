echo deleting old builds
rm -rf ./public/Build/website

echo Copying Website Unity project
SOURCE="/mnt/c/Users/Ray Feng/OneDrive/Documents/5. Game development/1.Projects/Website/builds/website/Build/"
DEST="/mnt/c/Users/Ray Feng/OneDrive/Documents/2. Web development/Projects/unity_react/public/Build/website/"
cp -R "$SOURCE" "$DEST"
echo Done copying Website Unity project