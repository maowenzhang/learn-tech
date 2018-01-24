# BOOST Notes

### add codes to check boost::filesystem::permission API
1. need download boost source codes and libs
2. this API works for mac (both file & directory: able to set permission rwx for owner / group / others)
3. this API doesn't work well for windows (uses win api: SetFileAttributesW, only remove read only attribute for file, not work for directory)