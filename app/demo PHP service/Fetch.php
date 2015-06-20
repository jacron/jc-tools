<?php

/*
 *
 * Author: jan
 * Date: 6-jun-2014
 *
 * request = 'allfiles'
 * parameter = path
 * The service should return a list of dirs that don't start with a dot.
 * Include names and types,
 * sort alphabetically by name.
 */
class Fetch {

    /*
     * Haal alle bestanden behalve als ze een naam hebben die met een punt begint.
     * Leg vast of ze file dan wel directory zijn.
     * Gemaakt voor de Mac.
     * (isDot blijkt hier niet te werken, utf8 encoding hoeft niet)
     */
    public function getAllFilesRaw($path) {

        $files = array();
        try {
            foreach (new DirectoryIterator($path) as $item) {
                if (substr($item, 0, 1) !== '.') {
                    $type = $item->isDir() ? 'dir' : 'file';
                    $files[] = array(
                        'name' => $item->getFilename(),
                        'type' => $type,
                    );
                }
            }
            return $files;

        } catch (Exception $exc) {
            return 'error in getAllFiles()';
        }
    }

    public function getAllFiles($path) {
        $files = $this->getAllFilesRaw($path);
        if (is_array($files)) {
            usort($files, function($a, $b) {
                $ua = strtolower($a['name']);
                $ub = strtolower($b['name']);
                if ($ua === $ub) {
                    return 0;
                }
                return $ua > $ub ? 1 : -1;
            });
        }
        return $files;
    }

}
