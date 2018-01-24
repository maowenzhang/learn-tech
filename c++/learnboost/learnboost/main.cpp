//
//  main.cpp
//  learnboost
//
//  Created by fusionm on 1/23/18.
//  Copyright © 2018 fusionm. All rights reserved.
//

#include <boost/filesystem.hpp>

#include <iostream>


void testDirectoryPermission() {
    //std::string strPath = "~/tmp/testBoostPermission";
    std::string strPath = "/Users/fusionm/tmp/testBoostPermission";
    boost::filesystem::path path = strPath;
    path /= "testSubFolder";
    if(!boost::filesystem::is_directory(path))
    {
        try
        {
            boost::filesystem::create_directory(path);
            boost::filesystem::permissions(path, boost::filesystem::perms::all_all); // grant permission for all operations
        }
        catch(boost::filesystem::filesystem_error& ex)
        {
            auto msg = ex.what();
            assert(false);
        }
    }
}

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    
    testDirectoryPermission();
    
    
    return 0;
}
