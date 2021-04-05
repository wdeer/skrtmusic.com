set :application, 'galaxyhempnetwork.com'
set :user, 'galaxyhemp'
set :server, '192.138.22.234'

set :repo_url, 'git@bitbucket.org:sobuckedup/galaxyhempnetwork.com.git'
set :branch, :master

set :webroot, 'build'
set :keep_releases, 5
set :log_level, :debug

set :tmp_dir, "/home/#{fetch(:user)}/.tmp"
set :pty, false
set :scm_verbose, "false"
set :deploy_via, :copy

namespace :deploy do
  set :local_app_path, Pathname.new(Dir.pwd)
  set :local_dist_path, fetch(:local_app_path).join(fetch(:webroot))

  task :compile do
    run_locally do
      within fetch(:local_app_path) do
        execute :yarn, 'build'
      end
    end
  end

  task :copy do
    on roles(:web) do
      set :remote_dist_path, fetch(:release_path).join(fetch(:webroot))
      puts "Your local distribution path: #{fetch(:local_dist_path)} "
      puts "Your remote distribution path: #{fetch(:remote_dist_path)} "
      puts "Uploading files to remote "
      upload! fetch(:local_dist_path).to_s, fetch(:remote_dist_path), recursive: true
    end
  end

  task assets: %w(compile copy)

end

after 'deploy:updated', 'deploy:assets'
